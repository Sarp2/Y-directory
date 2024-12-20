import { Ping } from "./Ping";

import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";

export const View = async ({ id }: { id: string}) => {
  const { views: totalViews } = await 
  client.withConfig({ useCdn: false }).fetch(STARTUP_VIEWS_QUERY, { id });

  await writeClient
    .patch(id)
    .set({ views: totalViews + 1 })
    .commit();
  
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text ml-left">
        <span className="font-black">views: {totalViews}</span>
      </p>
    </div>
  );
}