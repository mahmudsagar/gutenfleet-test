import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
const blockProps = useBlockProps();

export default ()=>{
    const ALLOWED_BLOCKS = [ 'core/image', 'core/paragraph' ];
    return <>
        <div { ...blockProps }>
            <InnerBlocks allowedBlocks={ ALLOWED_BLOCKS }/>
        </div>
    </>
}