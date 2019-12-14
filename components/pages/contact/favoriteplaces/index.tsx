import dynamic from "next/dynamic";

const DynamicItem: any = dynamic(() => import("./item"),
{   ssr: false,
//   loading: () => <ComponentLoader />
});

const ContactFavoritePlaces: React.FunctionComponent = () => {
    return (
        <>
            <p><b>Coming to visit us?</b> Here are some of our favorite places arount town to</p>
            <DynamicItem/>
        </>
    )
}

export default ContactFavoritePlaces