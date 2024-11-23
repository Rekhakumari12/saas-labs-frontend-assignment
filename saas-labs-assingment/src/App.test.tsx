/* eslint-disable testing-library/no-unnecessary-act */
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App, { DataObject } from "./App";
import { act } from "react";

global.fetch = jest.fn();

// Mock API response
const mockData: DataObject[] = [
  { "s.no": "1", "amt.pledged": 100, "percentage.funded": 50 },
  { "s.no": "2", "amt.pledged": 200, "percentage.funded": 60 },
  { "s.no": "3", "amt.pledged": 300, "percentage.funded": 70 },
  { "s.no": "4", "amt.pledged": 400, "percentage.funded": 80 },
  { "s.no": "5", "amt.pledged": 500, "percentage.funded": 90 },
  { "s.no": "6", "amt.pledged": 600, "percentage.funded": 95 },
  { "s.no": "7", "amt.pledged": 700, "percentage.funded": 100 },
];

jest.mock("./components/Skeleton", () => ({
  Skeleton: () => <div>Loading...</div>,
}));

describe("App", () => {
  beforeEach(() => {
    // Reset the mock before each test
    (fetch as jest.Mock).mockReset();
    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });
  });

  it("should render component with loading state correctly", async () => {
    render(<App />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  it("should render table row data", async () => {
    render(<App />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));

    const firstPage = "1 50 100";
    expect(screen.getByRole("row", { name: firstPage })).toBeInTheDocument();
  });

  it("should render Pagination", async () => {
    await act(() => render(<App />));
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument();

    // first page
    const firstPage = "1 50 100";
    expect(screen.getByRole("row", { name: firstPage })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "2" }));

    //second page
    const secondPage = "6 95 600";
    expect(screen.getByRole("row", { name: secondPage })).toBeInTheDocument();
  });
});
