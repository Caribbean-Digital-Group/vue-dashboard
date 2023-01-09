import { axios } from "@/utils/axios";

export default function () {
  async function getExample() {
    console.log("Composable Example");
    const data = { name: "test" };
    return data;
  }

  async function getAllStores() {
    console.log("Composable Organization");
    const { data } = await axios.get("organizations/public");
    return data;
  }

  return {
    getExample,
    getAllStores,
  };
}
