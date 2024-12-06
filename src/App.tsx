import { useEffect, useState } from "react";
import { Calendar } from "./components/ui/calendar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Event } from "@/models/event";

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [loggedIn, setLoggedIn] = useState<boolean | undefined>(false);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setLoggedIn(window.sessionStorage.getItem("bearer_token") != null);
    if (loggedIn) {
      //request all events for current date from current user

      setEvents([
        {
          name: "event1",
          start_time: 123,
          end_time: 123,
        },
      ]);
    }
  }, [date, loggedIn]);

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
          {loggedIn && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Name</TableHead>
                  <TableHead>Start Time</TableHead>
                  <TableHead>End Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.map((event, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{event.name}</TableCell>
                    <TableCell>{event.start_time}</TableCell>
                    <TableCell>{event.end_time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
          {!loggedIn && <h1>Please log in</h1>}
        </div>
      </div>
    </div>
  );
}

export default App;
