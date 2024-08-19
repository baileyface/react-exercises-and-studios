export default function HobbyLinks() {
    const hobbyLinks = [
        "https://www.goodreads.com/list/popular_lists",
        "https://www.nintendo.com/us/nintendo-direct/06-18-2024/"
    ];

    return (
        <div>
            <h3>My Hobbies</h3>
            <a href={hobbyLinks[0]} target="_blank">Goodreads</a>
            <a href={hobbyLinks[1]} target="_blank">Nintendo</a>
        </div>
    );
}