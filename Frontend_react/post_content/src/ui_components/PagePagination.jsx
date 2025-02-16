import React, { useContext } from 'react';
import clsx from 'clsx';
import styles from "../../public/css/Pagination.module.css"; // File CSS tùy chỉnh của bạn
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const PagePagination = (
    {
        numOfPages, 
        handleSetPage, 
        page, 
        increasePageValue, 
        decreasePageValue
    }) => {
    const {isDarkMode} = useContext(ThemeContext);
    const numbers = Array.from({length:numOfPages}, (_, i)=>i+1)
    console.log(numbers)
    const firstNumber = numbers[0]
    const lastNumber = numbers[numbers.length-1]
    return (
        <nav aria-label="Page navigation" className={clsx(styles.container_nav, 'mt-5')}>
            <ul className={clsx(styles.container_list, 'mx-auto')}>
                {
                    page === firstNumber || 
                    <li onClick={decreasePageValue()} className={clsx(styles.list_item, styles.start_item, 'mx-2')}>
                        <Link to="#" className={clsx(styles.list_link)} aria-label="Previous">
                            <span aria-hidden>&laquo;</span>
                        </Link>
                    </li>
                }
                {/* Lặp qua các trang và thêm class active nếu trang hiện tại khớp */}
                {/* {pages.map(page => (
                    <li 
                        key={page} 
                        className={clsx(styles.list_item, { [styles.active]: page === currentPage }, 'mx-2')}
                    >
                        <Link to="#" className={clsx(styles.list_link)}>
                            {page}
                        </Link>
                    </li>
                ))}
                 */}
                {numbers.map(number =>(
                    <li key={number} className={clsx(styles.list_item, 'mx-2')} onClick={()=>handleSetPage(number)}>
                        {
                            number === page ? (
                                <Link to="#" className={clsx(styles.list_link, styles.active)}>
                                    {number}
                                </Link>
                            ) : (
                                <Link to="#" className={clsx(styles.list_link)}>
                                    {number}
                                </Link>
                            )
                        }
                    </li>
                ))}
                {
                    page === lastNumber || 
                    <li onClick={increasePageValue()} className={clsx(styles.list_item, styles.end_item, 'mx-2')}>
                        <Link to="#" className={clsx(styles.list_link)} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </Link>
                    </li>
                }
            </ul>
        </nav>
    );
};

export default PagePagination;
