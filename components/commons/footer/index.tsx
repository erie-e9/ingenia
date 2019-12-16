import dynamic from 'next/dynamic'
import '../../../public/styles/commons/footer/index.scss'

const DynamicFooterComponent: any = dynamic(() => import("./footer-content"),
{ ssr: false,
//   loading: () => <ComponentLoader />
});

const DynamicFooterLinks: any = dynamic(() => import("./footer-links"),
{ ssr: false,
//   loading: () => <ComponentLoader />
});

const Footer: React.FunctionComponent = () => {
    return (
      <>
        <footer>
            <div className="footer-wrapper">
              {/* <DynamicFooterComponent /> */}
              <div className="footer-head-wrapper">
                <DynamicFooterComponent/>
                <DynamicFooterLinks/>
              </div>
            </div>
        </footer>
      </>
    );
  }
  
  export default Footer