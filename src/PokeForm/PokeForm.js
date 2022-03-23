import './PokeForm.css';

function PokeForm( props ){
    return(
        <form onSubmit={ e => props.buscarPokemones( e )}>
            <button type="submit" className='boton'>
                Fetch Pokemon
            </button>
        </form>
    );
}

export default PokeForm;