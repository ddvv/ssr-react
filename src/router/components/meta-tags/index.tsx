import type {FC, PropsWithChildren} from "react";
import {Helmet} from "react-helmet";

export type MetaTagsProps = {
    title?: string;
    description?: string;
}
export const MetaTags: FC<PropsWithChildren<MetaTagsProps>> = ({children, title, description}) => {
    return (<>
        <Helmet>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description}/>}

        </Helmet>
        {children}
    </>)
}