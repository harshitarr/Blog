export default function Contact(){

    return(
<>
        <title>Blog | Contact</title>
        <main class="container mx-auto px-4 py-6">
        <h2 class="text-4xl font-bold mb-4">Contact Us</h2>
        <form class="w-full max-w-lg">
            <div class="flex items-center mb-4">
                <label htmlfor="name" class="w-1/4">Name:</label>
                <input type="text" id="name" class="border rounded px-2 py-1 w-3/4"/>
            </div>
            <div class="flex items-center mb-4">
                <label htmlfor="email" class="w-1/4">Email:</label>
                <input type="email" id="email" class="border rounded px-2 py-1 w-3/4"/>
            </div>
            <div class="flex items-center mb-4">
                <label htmlfor="message" class="w-1/4">Message:</label>
                <textarea id="message" class="border rounded px-2 py-1 w-3/4" rows="4"></textarea>
            </div>
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
    </main>

    </>
    )
}