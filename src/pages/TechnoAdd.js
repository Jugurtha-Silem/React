export default function technoAdd(props) {
    const {handleAddTechno} = props;

    const techno = {

        name        : 'React',
        category    : 'front',
        description : 'learn react'

    }

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddTechno(techno);

    }
    return(
        <div className="techno-add">
            <h1>Add Techno</h1>
            <div>
                <form onsubmit ={(evt)=> handleSubmit(evt)}>
                    <label htmlfor="techno-name">Name</label>
                    <br/>
                    <input type="text" name="techno-name" id="techno-name"/>
                    <br/>
                    <select name="techno-category" id="techno-category">
                        <option value="select">select a category</option>
                        <option value="front">Front</option>
                        <option value="back">Back</option>
                        <option value="fullstack">fullstack</option>
                        <option value="Other">Other</option>
                    </select>
                    <br/>
                    <label htmlFor="techno-description">Description:</label>
                    <br/>
                    <textarea name="techno-description" id="techno-description" cols = "30" rows ="10"/>
                    <br/>
                    <input type="submit" value="ad techno"/>
                    <br/>
                </form>
            </div>

        </div>

    )
}