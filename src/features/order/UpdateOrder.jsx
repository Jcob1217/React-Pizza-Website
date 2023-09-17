import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  const isUpdatingPriority = fetcher.state === "loading";

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary" disabled={isUpdatingPriority}>
        {isUpdatingPriority ? "Updating..." : "Update to priority"}
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);

  return null;
}
