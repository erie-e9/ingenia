import dynamic from "next/dynamic";

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
            {/* <DynamicFooterComponent /> */}
            <p>@Ingenia 2014</p>
            <DynamicFooterComponent/>
            <DynamicFooterLinks/>
        </footer>
      </>
    );
  }
  
  export default Footer