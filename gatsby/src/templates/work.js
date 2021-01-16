import React, {createContext, useContext} from 'react';
import {Link} from "gatsby";
import { WorkBarNav, WorkContainer, WorkLayout } from '../components/ui/work';

const WorkSingleContext = createContext(null);

export default ({pageContext}) => {
    console.log(pageContext);
    const {acf, featured_media, slug, title} = pageContext;
    const {layouts_work, main_technology, professions, technologies} = acf;

    return (
        <WorkSingleContext.Provider value={{featured_media, slug, title, layouts_work, main_technology, professions, technologies}}>
            <WorkLayout classses="work-single">
                <WorkBarNav>
                    <Link to={`/work`} className="back-cta">
                        <svg 
                            width="32" 
                            height="32" 
                            viewBox="0 0 32 32" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7078 9.29202C11.801 9.38491 11.8748 9.49526 11.9253 9.61675C11.9757 9.73824 12.0016 9.86848 12.0016 10C12.0016 10.1316 11.9757 10.2618 11.9253 10.3833C11.8748 10.5048 11.801 10.6151 11.7078 10.708L6.41383 16L11.7078 21.292C11.8008 21.385 11.8746 21.4954 11.9249 21.6168C11.9752 21.7383 12.0011 21.8685 12.0011 22C12.0011 22.1315 11.9752 22.2617 11.9249 22.3832C11.8746 22.5047 11.8008 22.615 11.7078 22.708C11.6149 22.801 11.5045 22.8747 11.383 22.9251C11.2615 22.9754 11.1313 23.0013 10.9998 23.0013C10.8683 23.0013 10.7381 22.9754 10.6167 22.9251C10.4952 22.8747 10.3848 22.801 10.2918 22.708L4.29183 16.708C4.19871 16.6151 4.12482 16.5048 4.07441 16.3833C4.024 16.2618 3.99805 16.1316 3.99805 16C3.99805 15.8685 4.024 15.7382 4.07441 15.6167C4.12482 15.4953 4.19871 15.3849 4.29183 15.292L10.2918 9.29202C10.3847 9.19889 10.4951 9.125 10.6166 9.07459C10.7381 9.02418 10.8683 8.99823 10.9998 8.99823C11.1314 8.99823 11.2616 9.02418 11.3831 9.07459C11.5046 9.125 11.6149 9.19889 11.7078 9.29202Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 16C5 15.7348 5.10536 15.4804 5.29289 15.2929C5.48043 15.1054 5.73478 15 6 15H27C27.2652 15 27.5196 15.1054 27.7071 15.2929C27.8946 15.4804 28 15.7348 28 16C28 16.2652 27.8946 16.5196 27.7071 16.7071C27.5196 16.8946 27.2652 17 27 17H6C5.73478 17 5.48043 16.8946 5.29289 16.7071C5.10536 16.5196 5 16.2652 5 16Z" fill="black"/>
                        </svg>  

                        <h4>Back to my Selected work</h4>
                    </Link>
                </WorkBarNav>
                <WorkContainer>
                    <WorkHeader/>
                </WorkContainer>
            </WorkLayout>
        </WorkSingleContext.Provider>
    )
}

const WorkHeader = () =>  {
    const { title, featured_media } = useContext(WorkSingleContext);
    return (
        <div className="work-single--header">
            <div className="">
                <h1 dangerouslySetInnerHTML={{__html: title}}/>
                <div className="featured-image"></div>
            </div>
        </div>
    )
};
