import React from "react";

function Card(props) {
  return (
    <>
      <div class="w-[300px] rounded-md border">
        <img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Laptop"
          class="h-[200px] w-full rounded-md object-cover"
        />
        <div class="p-4 bg-blue-400">
          <h1 class="text-lg font-semibold text-black">About Macbook</h1>
          <p class="mt-3 text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button
            type="button"
            class="px-8 py-2 font-bold mt-4 rounded-sm bg-black text-[10px] text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Next 
          </button>
        </div>
      </div>
    </>
  );
}
export default Card;
