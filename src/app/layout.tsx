import Layout from "@/components/global/Layout";
import StyledComponentsRegistry from "@/lib/registry";
import "./global.css";
export const metadata = {
  title: "Mini blog | Evo Tech",
  description:
    "Mini blog - Call Answering and Scheduling Solutions for Virtual Call Centers and Executive Suites",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
