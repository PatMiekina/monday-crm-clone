import { useState } from 'react'

const TicketPage = () => {
    const [formData, setFormData] = useState({
        status: 'not started',
        progress: 0,
        timestamp: new Date().toISOString()
    });
    const editMode = false

    const handleSubmit = () => {
        console.log('submitted')
    }
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        })
        )
    }

    const categories = ['cat1', 'cat2']

    console.log(formData)

    return (
        <div className='ticket'>
            <h1>{editMode ? 'Update your ticket' : 'Add a ticket' }</h1>
            <div className='ticket-container'>
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor='title'>Title</label>
                        <input 
                            id='title'
                            name='title'
                            type='text'
                            onChange={handleChange}
                            required={true}
                            value={formData.title}
                        />

                        <label htmlFor='description'>Description</label>
                        <input 
                            id='description'
                            name='description'
                            type='text'
                            onChange={handleChange}
                            required={true}
                            value={formData.description}
                        />

                        <label>Category</label>
                        <select
                            name='category'
                            value={formData.category}
                            onChange={handleChange}
                        >
                            {categories?.map((category, _index) => (
                                <option key={_index} value={category}>{category}</option>
                            ))}
                        </select>

                        <label htmlFor='new-category'>New Category</label>
                        <input 
                            id='new-category'
                            name='category'
                            type='text'
                            onChange={handleChange}
                            required={true}
                            value={formData.category}
                        />

                        <label htmlFor='priority'>Priority</label>
                        <div className='multiple-input-container'>
                            <input 
                                id='priority-1'
                                name='priority'
                                type='radio'
                                onChange={handleChange}
                                value={formData.priority}
                                checked={formData.priority === 1}
                            />
                            <label htmlFor='priority-1'>1</label>

                            <input 
                                id='priority-2'
                                name='priority'
                                type='radio'
                                onChange={handleChange}
                                value={formData.priority}
                                checked={formData.priority === 2}
                            />
                            <label htmlFor='priority-1'>2</label>

                            <input 
                                id='priority-3'
                                name='priority'
                                type='radio'
                                onChange={handleChange}
                                value={formData.priority}
                                checked={formData.priority === 3}
                            />
                            <label htmlFor='priority-1'>3</label>

                            <input 
                                id='priority-4'
                                name='priority'
                                type='radio'
                                onChange={handleChange}
                                value={formData.priority}
                                checked={formData.priority === 4}
                            />
                            <label htmlFor='priority-1'>4</label>

                            <input 
                                id='priority-5'
                                name='priority'
                                type='radio'
                                onChange={handleChange}
                                value={formData.priority}
                                checked={formData.priority === 5}
                            />
                            <label htmlFor='priority-1'>5</label>
                        </div>

                        {editMode && 
                        <>
                            <input
                                type='range'
                                id='progress'
                                name='progress'
                                value={formData.progress}
                                min='0'
                                max='100'
                                onChange={handleChange}
                            />

                            <label htmlFor='progress'>Progress</label>

                            <label>Status</label>
                            <select
                                name='status'
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option selected={formData.status === 'done'} value='done'>Done</option>
                                <option selected={formData.status === 'working on it'} value='working on it'>Working on it</option>
                                <option selected={formData.status === 'stuck'} value='stuck'>Stuck</option>
                                <option selected={formData.status === 'not started'} value='not started'>Not started</option>
                            </select>
                        </>
                        
                        }
                        <input type='submit'/>

                    </section>

                    <section>
                        <label htmlFor='owner'>Owner</label>
                        <input
                            id='owner'
                            name='owner'
                            type='text'
                            required={true}
                            value={formData.owner}
                        />

                        <label htmlFor='avatar'>Avatar</label>
                        <input
                            id='avatar'
                            name='avatar'
                            type='url'
                            required={true}
                            value={formData.avatar}
                        />
                        <div className='img-preview'>
                            {formData.avatar && (
                                <img src={formData.avatar} alt='image-preview'/>
                            )}
                        </div>


                    </section>
                </form>
            </div>
        </div>
    )
}

export default TicketPage