import { render, screen } from "@testing-library/react";
import { Reservation } from "@/components/reservations/Reservation";

// 預定頁面顯示正確的座位數
test("Reservation page shows correct number of available seats", async () => {
  render(<Reservation showId={0} submitPurchase={jest.fn()} />);

  const seatCountText = await screen.findByText(/10 seats left/i);
  expect(seatCountText).toBeInTheDocument();
});
