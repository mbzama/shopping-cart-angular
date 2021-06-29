import React from 'react';
import Layout from '../../components/Layout';

import ProductsGrid from './ProductsGrid';

const Store = () => {
    
    return ( 
        <Layout title="tenant3" description="This is the Store page for tenant3" >
            <div >
                <div className="text-center mt-5">
                    <h1>tenant3</h1>
                    <p>This is the Store Page for tenant3.</p>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;