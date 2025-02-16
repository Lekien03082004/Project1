import clsx from "clsx"
import Badge from "../ui_components/Badge"
import BlogWriter from "../ui_components/BlogWriter"
import banner from "../images/detailBanner.jpg"
import styles from "../../public/css/DetailPage.module.css"
const DetailPage = () =>{
    return (
        <div className="container mt-5">
            <Badge/>
            <div className={clsx()}>
                <h2 className={clsx()}>
                    Buil and Ecommer Web App with Django and React.
                </h2>
            </div>
            <BlogWriter/>

            <div >
                <img className={clsx('w-100', 'rounded')} src={banner} alt="" />
            </div>
            <p className={clsx('mt-5', 'lh-lg', styles.detail_content)}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
            quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
            eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?
            </p>
        </div>
    )
}
export default DetailPage;