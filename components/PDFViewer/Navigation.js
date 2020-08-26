import React,{useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {SharedVariables} from '../Shared/SharedVariables'
import Button from '@material-ui/core/Button'
import CloseOutlined from '@material-ui/icons/CloseOutlined'

export const CustomPrevButton = props => {
    const { page, handlePrevClick } = props
    
    if (page === 1) {
        return <div />
    }


    return (
        <>
        <div style={{}}>
        </div>
        <h3

            style={{
                border:'1px solid',
                padding:'5px',
                cursor: 'pointer',
                display: 'inline-block',
                marginRight: 24,
                marginTop: 0,
                color:"red",

            }}
            onClick={handlePrevClick}>
            {"<-"} Previous page
        </h3>
        </>
    )
}
CustomPrevButton.propTypes = {
    page: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    handlePrevClick: PropTypes.func.isRequired,
}

export const CustomNextButton = props => {
    
    const { page, pages, handleNextClick } = props
    
    if (page === pages) return <div />

    return (
        <h3
            style={{
                border:'1px solid',
                padding:'5px',
                cursor: 'pointer',
                display: 'inline-block',
                marginLeft: 24,
                marginTop: 0,
                color:"green"
            }}
            onClick={handleNextClick}>
            Next page {"->"} 
        </h3>
    )
}
CustomNextButton.propTypes = {
    page: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    handleNextClick: PropTypes.func.isRequired,
}

export const CustomPages = props => {
    const { page, pages } = props
    return (
        <h3 style={{ display: 'inline-block', marginTop: 10, color:"black" }}>
            Page <span style={{color:'blue'}} >{page}</span> of {pages}
        </h3>
    )
}
CustomPages.propTypes = {
    page: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
}

const CustomNavigation = props => {
    
    const { page, pages } = props
    const { handlePrevClick, handleNextClick } = props
    
    const {info,setInfo} = useContext(SharedVariables);

    useEffect(() => {
        console.log(`disabled changed ${JSON.stringify(info)}`);
        return () => {
        }
    }, [info.disabled])

    return (
        <div className='customWrapper'>
            <div style={{display: 'inline-block'}}>
            <Button size="small" variant="contained" color="secondary" 
        style={{ position:"absolute", fontSize:14,
         marginLeft:0,marginTop:-460}} 

        startIcon={<CloseOutlined />}

        onClick={()=>{
            console.log("closed.. redirect to Feedback");
            setInfo({showSubmitQuery:true});
        }} >   Close PDF </Button>
        
            </div>
            <CustomPrevButton
                page={page}
                pages={pages}
                handlePrevClick={()=> { setInfo({...info, disabled:true}); handlePrevClick();   }}
            />
            <CustomPages page={page} pages={pages} />
            <CustomNextButton
                page={page}
                pages={pages}
                handleNextClick={()=>{setInfo({...info, disabled:true}); handleNextClick();  }}
            />
        </div>
    )
}
CustomNavigation.propTypes = {
    page: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    handlePrevClick: PropTypes.func.isRequired,
    handleNextClick: PropTypes.func.isRequired,
}

export default CustomNavigation;