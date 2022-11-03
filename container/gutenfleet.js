
const {registerBlockType} = wp.blocks
// const {innerblocks, useBlockProps} = wp.blockEditor
import block from "./blocks"
// import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

registerBlockType('gutenfleet/container-block',{
    title: 'gutenfleet flex container',
    icon: 'image-rotate-left',
    category: 'design',
    attributes:{},
    edit(props){
        // return wp.element.createElement('p',{className: props.className}, 'basic block creation')
        const blockProps = useBlockProps();
        const ALLOWED_BLOCKS = [ 'core/image', 'core/paragraph' ];
        return block()
    },
    save(props){
        
    }
})