import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Background from '../components/layout/Background';
import PageInteractions from '../components/layout/PageInteractions';
import BackToTop from '../components/layout/BackToTop';
export default function Template({ children }) {
 return <PageInteractions><Header/><main className="site-main">{children}</main><Footer/><Background/><BackToTop/></PageInteractions>;
}
