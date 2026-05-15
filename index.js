let PI = 0

const hitungLingkaran = (r, PI) => {

    // guarding
    if(typeof r !== "number"){
        console.log(`Input ${r} bukan number`)
        return
    }
    
    if(r % 7 == 0){
        PI = 22/7
    } else {
        PI = 3.14
    }
    
    const L = PI * r * r
    const K = 2 * PI * r
    
    console.log(`Luas dari lingkaran = ${L}`)
    console.log(`Keliling dari lingkaran = ${K}`)

}

hitungLingkaran(8, PI)

