import { render, screen } from "@testing-library/react";
import { Reservation } from "@/components/reservations/Reservation";

// 預定頁面顯示正確的座位數
test("Reservation page shows correct number of available seats", async () => {
  render(<Reservation showId={0} submitPurchase={jest.fn()} />);

  const seatCountText = await screen.findByText(/10 seats left/i);
  expect(seatCountText).toBeInTheDocument();
});

// 測試沒有座位是否有正確顯示 sold out
test("reservation page shows 'sold out' message and NO purchase button if there are no seats available", async () => {
  // make data showId 傳 1 會回傳沒有座位資料
  render(<Reservation showId={1} submitPurchase={jest.fn()} />);

  const soldOutMessage = await screen.findByRole("heading", {
    name: /sold out/i,
  });
  expect(soldOutMessage).toBeInTheDocument();

  const purchaseButton = screen.queryByRole("button", {
    name: /purchase/i,
  });
  expect(purchaseButton).not.toBeInTheDocument();
});
