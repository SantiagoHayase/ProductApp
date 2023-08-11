import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";

export const Navbar = async () => {
  const session = await getServerSession();
  return (
    <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 p-2">
      <Link href="/">
        <h2 className="text-center underline">Productos</h2>
      </Link>

      {session ? (
        <div>
          <Link href={"/api/auth/signout"} className="px-3">
            Log out
          </Link>
        </div>
      ) : null}
    </div>
  );
};
