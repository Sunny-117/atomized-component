import instance from "@/api/axios";

export async function getTreeDataList() {
  return await instance.get("/data.json");
}
