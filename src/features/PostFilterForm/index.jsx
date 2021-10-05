import React, {useState,useRef} from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmit: null,
};

function PostFilterForm(props) {
    const {onSubmit} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleSearchTeamChange(e){
        let value = e.target.value;
        setSearchTerm(value);

        if(!onSubmit) return;
        
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current);
        };

        typingTimeoutRef.current = setTimeout(() =>{

            const formValues = {
                searchTerm: value,
            };
            onSubmit(formValues);

        },300)
        
        
    }

    return (
        <div>
            <form>
                <input type="text" 
                value={searchTerm}
                onChange={handleSearchTeamChange}
                />
            </form>
        </div>
    );
}

export default PostFilterForm;