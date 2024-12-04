import { useState } from "react";
import { Calendar } from "./components/ui/calendar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const items = [
  {
    date: "Monday",
    event: "birthday party",
    time: "9pm",
    duration: "2h",
  },
  {
    date: "Tuesday",
    event: "interview",
    time: "3pm",
    duration: "1h",
  },
  {
    date: "Saturday",
    event: "gym",
    time: "10am",
    duration: "1h",
  },
];

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex-col w-full items-center justify-center">
      <div className="flex text-3xl w-full p-10 items-center justify-center">
        <div className="flex items-center space-x-20 w-3/5">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border p-5"
          />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((invoice) => (
                <TableRow key={invoice.event}>
                  <TableCell className="font-medium">{invoice.date}</TableCell>
                  <TableCell>{invoice.event}</TableCell>
                  <TableCell>{invoice.time}</TableCell>
                  <TableCell>{invoice.duration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default App;
