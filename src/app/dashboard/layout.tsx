'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


export default function Layout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <div>Side Nav</div>
        <Link href='/dashboard/about'>page</Link> 
        <br></br>
        <Link href='/dashboard/invoices'             className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === '/dashboard/invoices',
              },
            )}>invoices</Link>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}