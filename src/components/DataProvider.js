import React, {createContext, useState, useEffect} from 'react'
export const DataContext = createContext();

export const  DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Lorem ipsum fashion female top",
            "images": [
                "https://media.gettyimages.com/photos/andean-cockoftherock-with-black-background-picture-id639549206?s=2048x2048",
                "https://media.gettyimages.com/photos/anna-aronov-wearing-denim-jacket-and-meital-katz-wearing-white-tshirt-picture-id931750614?s=2048x2048",
                "https://media.gettyimages.com/photos/modern-architecture-in-chile-from-raimundo-anguita-in-hacienda-picture-id976189812?k=6&m=976189812&s=612x612&w=0&h=voLVmLvz95fl1X_DVTwstYXqppW6jd9YG16cwb1DgRM=",
                "https://media.gettyimages.com/photos/aimee-song-wearing-a-pink-suit-seen-in-the-streets-of-manhattan-lim-picture-id845846140?k=6&m=845846140&s=612x612&w=0&h=xLuT5eCOc_Xi8owizI5V4FZ62DjVilsb_cARgUMSGUI="
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "2",
            "title": "Lorem ipsum fashion jacket",
            "images": [
                "https://media.gettyimages.com/photos/andean-cockoftherock-with-black-background-picture-id639549206?s=2048x2048",
                "https://media.gettyimages.com/photos/anna-aronov-wearing-denim-jacket-and-meital-katz-wearing-white-tshirt-picture-id931750614?s=2048x2048",
                "https://media.gettyimages.com/photos/modern-architecture-in-chile-from-raimundo-anguita-in-hacienda-picture-id976189812?k=6&m=976189812&s=612x612&w=0&h=voLVmLvz95fl1X_DVTwstYXqppW6jd9YG16cwb1DgRM=",
                "https://media.gettyimages.com/photos/aimee-song-wearing-a-pink-suit-seen-in-the-streets-of-manhattan-lim-picture-id845846140?k=6&m=845846140&s=612x612&w=0&h=xLuT5eCOc_Xi8owizI5V4FZ62DjVilsb_cARgUMSGUI="
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1
        },
        {
            "_id": "3",
            "title": "Lorem ipsum kids eight",
            "images": [
                "https://media.gettyimages.com/photos/andean-cockoftherock-with-black-background-picture-id639549206?s=2048x2048",
                "https://media.gettyimages.com/photos/anna-aronov-wearing-denim-jacket-and-meital-katz-wearing-white-tshirt-picture-id931750614?s=2048x2048",
                "https://media.gettyimages.com/photos/modern-architecture-in-chile-from-raimundo-anguita-in-hacienda-picture-id976189812?k=6&m=976189812&s=612x612&w=0&h=voLVmLvz95fl1X_DVTwstYXqppW6jd9YG16cwb1DgRM=",
                "https://media.gettyimages.com/photos/aimee-song-wearing-a-pink-suit-seen-in-the-streets-of-manhattan-lim-picture-id845846140?k=6&m=845846140&s=612x612&w=0&h=xLuT5eCOc_Xi8owizI5V4FZ62DjVilsb_cARgUMSGUI="
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1
        },
        {
            "_id": "4",
            "title": "Lorem ipsum jacket",
            "images": [
                "https://media.gettyimages.com/photos/andean-cockoftherock-with-black-background-picture-id639549206?s=2048x2048",
                "https://media.gettyimages.com/photos/anna-aronov-wearing-denim-jacket-and-meital-katz-wearing-white-tshirt-picture-id931750614?s=2048x2048",
                "https://media.gettyimages.com/photos/modern-architecture-in-chile-from-raimundo-anguita-in-hacienda-picture-id976189812?k=6&m=976189812&s=612x612&w=0&h=voLVmLvz95fl1X_DVTwstYXqppW6jd9YG16cwb1DgRM=",
                "https://media.gettyimages.com/photos/aimee-song-wearing-a-pink-suit-seen-in-the-streets-of-manhattan-lim-picture-id845846140?k=6&m=845846140&s=612x612&w=0&h=xLuT5eCOc_Xi8owizI5V4FZ62DjVilsb_cARgUMSGUI="
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 104,
            "count": 1
        },
        {
            "_id": "5",
            "title": "Lorem ipsum kids six",
            "images": [
                "https://media.gettyimages.com/photos/andean-cockoftherock-with-black-background-picture-id639549206?s=2048x2048",
                "https://media.gettyimages.com/photos/anna-aronov-wearing-denim-jacket-and-meital-katz-wearing-white-tshirt-picture-id931750614?s=2048x2048",
                "https://media.gettyimages.com/photos/modern-architecture-in-chile-from-raimundo-anguita-in-hacienda-picture-id976189812?k=6&m=976189812&s=612x612&w=0&h=voLVmLvz95fl1X_DVTwstYXqppW6jd9YG16cwb1DgRM=",
                "https://media.gettyimages.com/photos/aimee-song-wearing-a-pink-suit-seen-in-the-streets-of-manhattan-lim-picture-id845846140?k=6&m=845846140&s=612x612&w=0&h=xLuT5eCOc_Xi8owizI5V4FZ62DjVilsb_cARgUMSGUI="
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 105,
            "count": 1
        },
        {
            "_id": "6",
            "title": "Lorem ipsum fashion female coat",
            "images": [
                "https://media.gettyimages.com/photos/andean-cockoftherock-with-black-background-picture-id639549206?s=2048x2048",
                "https://media.gettyimages.com/photos/anna-aronov-wearing-denim-jacket-and-meital-katz-wearing-white-tshirt-picture-id931750614?s=2048x2048",
                "https://media.gettyimages.com/photos/modern-architecture-in-chile-from-raimundo-anguita-in-hacienda-picture-id976189812?k=6&m=976189812&s=612x612&w=0&h=voLVmLvz95fl1X_DVTwstYXqppW6jd9YG16cwb1DgRM=",
                "https://media.gettyimages.com/photos/aimee-song-wearing-a-pink-suit-seen-in-the-streets-of-manhattan-lim-picture-id845846140?k=6&m=845846140&s=612x612&w=0&h=xLuT5eCOc_Xi8owizI5V4FZ62DjVilsb_cARgUMSGUI="
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106,
            "count": 1
        },
        {
            "_id": "7",
            "title": "Lorem ipsum kids seven",
            "images": [
                "https://media.gettyimages.com/photos/andean-cockoftherock-with-black-background-picture-id639549206?s=2048x2048",
                "https://media.gettyimages.com/photos/anna-aronov-wearing-denim-jacket-and-meital-katz-wearing-white-tshirt-picture-id931750614?s=2048x2048",
                "https://media.gettyimages.com/photos/modern-architecture-in-chile-from-raimundo-anguita-in-hacienda-picture-id976189812?k=6&m=976189812&s=612x612&w=0&h=voLVmLvz95fl1X_DVTwstYXqppW6jd9YG16cwb1DgRM=",
                "https://media.gettyimages.com/photos/aimee-song-wearing-a-pink-suit-seen-in-the-streets-of-manhattan-lim-picture-id845846140?k=6&m=845846140&s=612x612&w=0&h=xLuT5eCOc_Xi8owizI5V4FZ62DjVilsb_cARgUMSGUI="
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106,
            "count": 1
        },
        {
            "_id": "8",
            "title": "Lorem ipsum jacket",
            "images": [
                "https://media.gettyimages.com/photos/andean-cockoftherock-with-black-background-picture-id639549206?s=2048x2048",
                "https://media.gettyimages.com/photos/anna-aronov-wearing-denim-jacket-and-meital-katz-wearing-white-tshirt-picture-id931750614?s=2048x2048",
                "https://media.gettyimages.com/photos/modern-architecture-in-chile-from-raimundo-anguita-in-hacienda-picture-id976189812?k=6&m=976189812&s=612x612&w=0&h=voLVmLvz95fl1X_DVTwstYXqppW6jd9YG16cwb1DgRM=",
                "https://media.gettyimages.com/photos/aimee-song-wearing-a-pink-suit-seen-in-the-streets-of-manhattan-lim-picture-id845846140?k=6&m=845846140&s=612x612&w=0&h=xLuT5eCOc_Xi8owizI5V4FZ62DjVilsb_cARgUMSGUI="
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106,
            "count": 1
        }
    ])

    const[cart,setCart] = useState([])

    const addCart = (id) => {
        const check = cart.every(item =>{
            return item._id !==id
        })
        if(check){
            const data = products.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("The product has been added to cart.")
        }
    }

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if(dataCart) setCart(dataCart)
    }, [])

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart))
    }, [cart])

    const value ={
        products:[products, setProducts],
        cart:[cart, setCart],
        addCart: addCart
    }


    return ( 
        <DataContext.Provider value = {value}>
            {props.children}

        </DataContext.Provider>
    )
}
