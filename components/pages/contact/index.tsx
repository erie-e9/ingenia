import dynamic from "next/dynamic";

const DynamicContactForm: any = dynamic(() => import("./form"),
{   ssr: false,
//   loading: () => <ComponentLoader />
});

const DynamicContactLocations: any = dynamic(() => import("./locations"),
{   ssr: false,
//   loading: () => <ComponentLoader />
});

const ContactFavoritePlaces: any = dynamic(() => import("./favoriteplaces"),
{   ssr: false,
//   loading: () => <ComponentLoader />
});

const IndexContact: React.FunctionComponent = () => {
    return (
        <>
            <DynamicContactLocations />
            <DynamicContactForm />
            <ContactFavoritePlaces />
        </>
    )
}

export default IndexContact