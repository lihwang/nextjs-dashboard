import SideNav from "@/app/ui/dashboard/sidenav";
// 启用配置
// 部分预渲染的优点在于，您无需更改代码即可使用它。只要你使用 Suspense 来包装路线的动态部分，Next.js就会知道你的路线的哪些部分是静态的，哪些是动态的。
export const experimental_ppr = true;
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
