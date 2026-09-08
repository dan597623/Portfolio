import 'swiper/css';
import '../styles/vendors.css';
import '../styles/original.css';
import '../styles/blocks.css';
import '../styles/react.css';
import '../styles/mytutor.css';
export const metadata = {
 title: 'Daniel | Full-Stack & AI Engineering',
 description: "Explore Daniel's client projects, full-stack engineering, and practical AI solutions.",
 icons: { icon: { url: '/assets/brand/favicon-dark.svg', type: 'image/svg+xml' } },
};
export default function RootLayout({ children }) {
 return <html lang="en" data-theme="dark" suppressHydrationWarning><body className="page sticky" suppressHydrationWarning>{children}</body></html>;
}
