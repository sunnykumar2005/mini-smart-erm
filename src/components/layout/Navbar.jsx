import {
  Bell,
  Search,
  Moon,
  UserCircle
} from "lucide-react";

export default function Navbar() {
  return (

    <header className="h-16 bg-white shadow flex items-center justify-between px-8">

      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <div className="flex items-center gap-6">

        <Search className="cursor-pointer"/>

        <Bell className="cursor-pointer"/>

        <Moon className="cursor-pointer"/>

        <UserCircle className="cursor-pointer"/>

      </div>

    </header>

  );
}