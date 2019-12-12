import React from 'react';
import ContentLoader from "react-content-loader";

const SkeletonLoader = () => (
    <ContentLoader 
      height={200}
      width={169}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
        
      <rect x="9" y="6" rx="0" ry="0" width="152" height="122" /> 
      <rect x="9" y="139" rx="0" ry="0" width="152" height="10" /> 
      <rect x="9" y="154" rx="0" ry="0" width="152" height="10" />
    </ContentLoader>
  )
  export default SkeletonLoader;