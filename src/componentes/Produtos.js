import { StyledProduto } from "./estilos/Produtos.style";
import Image from "./Image";


function Produtos() {
    const produtos = [
        {
            "id": 1,
            "title": "Produto 1",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7lflJTatM4EbvzvkwfACALM9S4Hw7uLJJ8NfMuiwYB-PLYjrvm-ehscOvLyie_3D0aM&usqp=CAU"
        },
        {
            "id": 2,
            "title": "Produto 2",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcROzy8xOUG84aYyfLIdoSv5ZMrseEzQq0t8buFLp_Ws2_zs7F8PrO7H69BYkxdj_-KJyss_fkUI_cq6sopxNsaIXUNRDmIjqgiDhxtOJSOb6eHVISQQ-OWcOg&usqp=CAE"
        },
        {
            "id": 3,
            "title": "Produto 3",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT2IKffGyYRm0NfBXKJ22SZj0hPFdpvDdRjws9vakkCbbkgGEycBceB7KeF01M6zlzwGDCmIrh6RXWblkE_FFfe_PlPCwCVv3eppO6gZPtRe_byEET6bWb88A&usqp=CAE"
        },
        {
            "id": 4,
            "title": "Produto 4",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93H1agxMfDpi7mDt9Yy0bvy32H23w-c9tzky6EjHdrs28RLGPIvAl3XolLOWPPd9QKuw&usqp=CAU"
        },
        {
            "id": 5,
            "title": "Produto 5",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7lflJTatM4EbvzvkwfACALM9S4Hw7uLJJ8NfMuiwYB-PLYjrvm-ehscOvLyie_3D0aM&usqp=CAU"
        },
        {
            "id":6,
            "title": "Produto 6",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcROzy8xOUG84aYyfLIdoSv5ZMrseEzQq0t8buFLp_Ws2_zs7F8PrO7H69BYkxdj_-KJyss_fkUI_cq6sopxNsaIXUNRDmIjqgiDhxtOJSOb6eHVISQQ-OWcOg&usqp=CAE"
        },
        {
            "id": 7,
            "title": "Produto 7",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT2IKffGyYRm0NfBXKJ22SZj0hPFdpvDdRjws9vakkCbbkgGEycBceB7KeF01M6zlzwGDCmIrh6RXWblkE_FFfe_PlPCwCVv3eppO6gZPtRe_byEET6bWb88A&usqp=CAE"
        },
        {
            "id": 8,
            "title": "Produto 8",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93H1agxMfDpi7mDt9Yy0bvy32H23w-c9tzky6EjHdrs28RLGPIvAl3XolLOWPPd9QKuw&usqp=CAU"
        },
        {
            "id": 9,
            "title": "Produto 9",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7lflJTatM4EbvzvkwfACALM9S4Hw7uLJJ8NfMuiwYB-PLYjrvm-ehscOvLyie_3D0aM&usqp=CAU"
        },
        {
            "id": 10,
            "title": "Produto 10",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcROzy8xOUG84aYyfLIdoSv5ZMrseEzQq0t8buFLp_Ws2_zs7F8PrO7H69BYkxdj_-KJyss_fkUI_cq6sopxNsaIXUNRDmIjqgiDhxtOJSOb6eHVISQQ-OWcOg&usqp=CAE"
        },
        {
            "id": 11,
            "title": "Produto 11",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT2IKffGyYRm0NfBXKJ22SZj0hPFdpvDdRjws9vakkCbbkgGEycBceB7KeF01M6zlzwGDCmIrh6RXWblkE_FFfe_PlPCwCVv3eppO6gZPtRe_byEET6bWb88A&usqp=CAE"
        },
        {
            "id": 12,
            "title": "Produto 12",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93H1agxMfDpi7mDt9Yy0bvy32H23w-c9tzky6EjHdrs28RLGPIvAl3XolLOWPPd9QKuw&usqp=CAU"
        },
        {
            "id": 13,
            "title": "Produto 13",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7lflJTatM4EbvzvkwfACALM9S4Hw7uLJJ8NfMuiwYB-PLYjrvm-ehscOvLyie_3D0aM&usqp=CAU"
        },
        {
            "id": 14,
            "title": "Produto 14",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcROzy8xOUG84aYyfLIdoSv5ZMrseEzQq0t8buFLp_Ws2_zs7F8PrO7H69BYkxdj_-KJyss_fkUI_cq6sopxNsaIXUNRDmIjqgiDhxtOJSOb6eHVISQQ-OWcOg&usqp=CAE"
        },
        {
            "id": 15,
            "title": "Produto 15",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT2IKffGyYRm0NfBXKJ22SZj0hPFdpvDdRjws9vakkCbbkgGEycBceB7KeF01M6zlzwGDCmIrh6RXWblkE_FFfe_PlPCwCVv3eppO6gZPtRe_byEET6bWb88A&usqp=CAE"
        },
        {
            "id": 16,
            "title": "Produto 16",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93H1agxMfDpi7mDt9Yy0bvy32H23w-c9tzky6EjHdrs28RLGPIvAl3XolLOWPPd9QKuw&usqp=CAU"
        },
        {
            "id": 17,
            "title": "Produto 17",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7lflJTatM4EbvzvkwfACALM9S4Hw7uLJJ8NfMuiwYB-PLYjrvm-ehscOvLyie_3D0aM&usqp=CAU"
        },
        {
            "id": 18,
            "title": "Produto 18",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcROzy8xOUG84aYyfLIdoSv5ZMrseEzQq0t8buFLp_Ws2_zs7F8PrO7H69BYkxdj_-KJyss_fkUI_cq6sopxNsaIXUNRDmIjqgiDhxtOJSOb6eHVISQQ-OWcOg&usqp=CAE"
        },
        {
            "id": 19,
            "title": "Produto 19",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT2IKffGyYRm0NfBXKJ22SZj0hPFdpvDdRjws9vakkCbbkgGEycBceB7KeF01M6zlzwGDCmIrh6RXWblkE_FFfe_PlPCwCVv3eppO6gZPtRe_byEET6bWb88A&usqp=CAE"
        },
        {
            "id": 20,
            "title": "Produto 20",
            "description": "Descrição detalhada.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93H1agxMfDpi7mDt9Yy0bvy32H23w-c9tzky6EjHdrs28RLGPIvAl3XolLOWPPd9QKuw&usqp=CAU"
        }]

    return (
        produtos.map((produtos) => {
            return (

                <StyledProduto key={produtos.id}>
                    <Image url={produtos.imageUrl} id={produtos.id} />
                    <p>{produtos.title}</p>
                    <p>{produtos.description}</p>
                </StyledProduto>

            )
        }
        )
    )

}

export default Produtos;