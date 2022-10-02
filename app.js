const video=document.querySelector('video')
const snapBtn=document.querySelector('#snap-btn')
const canvas=document.querySelector('canvas')
const context=canvas.getContext('2d')
const table=document.querySelector('table')

const startStrem=async()=>{
    const constraints={
        audio:false,
        video:{
            with:{
                min:370,
                ideal:1980,
                max:2600
            },
            height:{
                min:660,
                ideal:1200,
                max:2600
            },
            facingMode:'environment'
        }
    }
    
    const stream=await navigator.mediaDevices.getUserMedia(constraints)
    video.srcObject=stream
}

const snapPicture=()=>{
    const tbody=document.querySelector('tbody')
    context.drawImage(video,0,0,canvas.width,canvas.height)
    const myClass=new MyClass("Muhammed","07BAC987",canvas.toDataURL())
    const myNewRow=`<tr class="row">
                        <td>${myClass.localdate}</td>
                        <td>${myClass.name}</td>
                        <td>${myClass.plate}</td>
                        <td class="picture"></td>
                        <td class="delete-me">XX</td>
                    </tr>`
    tbody.innerHTML+=myNewRow
    const image=document.createElement('img')
    image.src=canvas.toDataURL()
    const lastRow=document.querySelectorAll('.row')
    const tdImage=lastRow[lastRow.length-1].querySelector('.picture')
    tdImage.appendChild(image)
    image.classList.add('fit-picture')
    const deleteBtn=document.querySelectorAll('.delete-me')
    deleteBtn.forEach(item=>{
        item.addEventListener('click',(e)=>{
           e.target.parentElement.remove()
        })
    })
}

snapBtn.addEventListener('click',snapPicture)






startStrem()
