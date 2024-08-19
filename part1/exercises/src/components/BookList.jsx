export default function BookList() {
   let pageTitle = "Latest Book Releases";
   let book1 = "https://m.media-amazon.com/images/I/71gNi67nRyL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/81A6W4q3jAL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/71-z+-TmvnL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Invisible Life of Addie LaRue by V.E. Schwab" width="150"/>
         <img src={book2} alt="This Body's Not Big Enough For Both Of Us by Edgar Cantero" width="150"/>
         <img src={book3} alt="The Final Girl Support Group by Grady Hendrix" width="150"/>
      </div>      
   );
}