import { BasePage } from "./BasePage.js";
import { expect } from '@playwright/test';
export class Sortingproductpage extends BasePage
{
    text=[];
   


    constructor(page)
    {
         
        super(page);
        this.sortingele= page.locator(".product_sort_container");
        this.allele=page.locator("//div[@class='pricebar']//div");
        
    }

    async productclick()
    {
        let val=""
        let loc="";
        await this.sortingele.selectOption("Price (low to high)");
        await this.page.waitForTimeout(2000);
        let alltext=await this.allele.all();
        for(let a of alltext)
        {
           loc=await a.textContent();
           val= loc.slice(1);
            this.text.push(Number(val));
        }
        
        console.log(this.text);
    }
    async sorting_Verification()
    {
       let res= [...this.text].sort((a,b)=>a-b);
       expect(res).toEqual(this.text);
    }
}