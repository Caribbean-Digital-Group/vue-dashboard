import useOrganizationsApi from "./api/useOrganizationsApi.js";

export default function useApi() {
  const organization = useOrganizationsApi();

  return {
    ...organization,
  };
}
