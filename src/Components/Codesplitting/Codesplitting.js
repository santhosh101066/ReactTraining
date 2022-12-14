import React, { Component, Suspense } from 'react';


class Codesplitting extends Component {
    render() {
         import('./math').then(math=>console.log(math.default(2,56)))
         const Forms= React.lazy(()=>import('../Forms'))
        return (
            <div>
                Import output in log
                <h2>Lazy Loading</h2>
                <Suspense fallback={<div>Loading..</div>}>
                <Forms/>
                </Suspense>
                

            </div>
        );
    }
}

export default Codesplitting;