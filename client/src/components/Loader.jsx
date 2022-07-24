
/**
 * It returns a div with a class of modal, which contains a div with a class of container_modal, which
 * contains a div with a class of loader, which contains a h1 with a class of text.
 * returns A div with a class of modal.
 */
 const Loader = () => {
    return (
      <div className='modal'>
        <div className='container_modal backdrop-blur-xl bg-white/30'>
          <div className='loader'></div>
          <h1 className='text'>Loading...</h1>
        </div>
      </div>
    );
}
export default Loader;