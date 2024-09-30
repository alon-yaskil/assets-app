import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "../App";

const mockData = [
  {
    _id: "ff4a61f36fc2b5a6fc54233fb7f19cb3",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "tf-instance-SAP-app PROD",
    owner: {
      name: "David",
    },
  },
  {
    _id: "fedd9348f0c09ff9e72017edd418d63d",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "tf-instance-jhon-DEV",
    owner: {
      owner: {
        name: "William",
      },
    },
  },
];
test("check that header renders", async () => {
  render(<App />);

  await screen.getByText(/Assets/i);
});

test("check that table headers renders", async () => {
  render(<App />);

  screen.getByText(/ID/i);
  screen.getByText(/Asset Name/i);
  screen.getByText(/Owner Name/i);
  screen.getByText(/Is Crown Jewel/i);
});
beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(async () => {
    return {
      json: () => ({ data: mockData, total: mockData.length }),
      ok: true,
    } as any;
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("check all elements from server appears", async () => {
  render(<App />);
  await waitFor(() => screen.getByText(/ff4a61f36fc2b5a6fc54233fb7f19cb3/i));
  await waitFor(() => screen.getByText(/fedd9348f0c09ff9e72017edd418d63d/i));
});

test("save button appearance", async () => {
  render(<App />);

  //check that save doesnt appear at first
  let saveButton = await waitFor(() => screen.queryByLabelText("save-button"));
  expect(saveButton).toBeNull();

  fireEvent.click(screen.queryByLabelText("edit-button")!);

  //check that save appear and disabled in edit mode
  saveButton = await waitFor(() => screen.queryByLabelText("save-button"));
  expect(saveButton).toBeDisabled();

  const select = await waitFor(() =>
    screen.queryByLabelText(`select-${mockData[0]._id}`),
  );

  fireEvent.change(select!, {
    target: { value: (!mockData[0].enriched.isCrownJewel).toString() },
  });

  //check that save appear and enabled in edit mode
  saveButton = await waitFor(() => screen.queryByLabelText("save-button"));
  expect(saveButton).not.toBeDisabled();

  fireEvent.click(screen.queryByLabelText("undo-button")!);

  //check that save appear and disabled again after undo
  saveButton = await waitFor(() => screen.queryByLabelText("save-button"));
  expect(saveButton).toBeDisabled();
});
