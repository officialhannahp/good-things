import React from 'react'

const JewelryForm = props => {
    const { action, submitHandler, changeHandler, jewelry } = props;


    return (
        <div>
            <form onSubmit={submitHandler}>
                {/* <div>
                    <label htmlFor="img">Image: </label>
                    <input type="file" name="photo" accept=".png, .jpg, .jpeg" value={jewelry.img} onChange={changeHandler} />
                </div> */}
                <div>
                    <label htmlFor="name">Jewelry: </label>
                    <input type="text" name="name"  onChange={changeHandler} />
                </div>

                <div>
                    <label>Price: </label>
                    <input type="text" name="type" onChange={changeHandler} />
                </div>

                <div>
                    <label>Description: </label>
                    <input type="text" name="desc"  onChange={changeHandler} />
                </div>

                <input type="submit" value={action} />
            </form>
        </div>
    )
}

export default JewelryForm
