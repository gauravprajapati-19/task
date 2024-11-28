import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../assets/images/blog22.jpg";

const PostDetail = () => {
    return (
        <section className="post-detail">
            <div className="container post-detail_container">
                <div className="post-detail_header">
                    <PostAuthor />
                    <div className="post-detail_buttons">
                        <Link to={`/posts/werwer/edit`} className="btn sm primary">
                            Edit
                        </Link>
                        <Link to={`/posts/werwer/delete`} className="btn sm danger">
                            Delete
                        </Link>
                    </div>
                </div>
                <h1>This is the post title!</h1>
                <div className="post-detail_thumbnail">
                    <img src={Thumbnail} alt="" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur repudiandae aut facere illum qui dolor, delectus nostrum
                    assumenda quibusdam quos, ex id eaque doloremque reprehenderit explicabo eligendi, velit ducimus ad rerum? A, architecto ad. Qui
                    alias expedita aperiam ipsum cupiditate!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sit aspernatur fugit accusamus tempore nisi! Sed possimus
                    incidunt repellendus numquam atque doloribus temporibus libero earum reprehenderit at fugit magni, deserunt, minima iure
                    voluptatum aperiam expedita animi, porro consequatur? Laboriosam, dolores dolorem aliquam necessitatibus suscipit dolorum
                    temporibus, quas mollitia molestiae quis, repudiandae minima modi voluptatum quo.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea culpa vel ipsa nulla doloribus est, magni totam rem, atque,
                    pariatur distinctio odit reiciendis quis ipsum inventore officia! Repellendus obcaecati, neque, et reprehenderit commodi a impedit
                    nihil laudantium repudiandae illo deleniti, blanditiis quisquam! Soluta similique, voluptate quos dignissimos numquam nemo ipsum
                    voluptatum, natus vel, voluptatem excepturi culpa aperiam doloribus neque sint nesciunt maxime quod cumque tenetur reprehenderit
                    facilis. Laborum tempore debitis quibusdam placeat eaque qui voluptate itaque temporibus mollitia non culpa odio velit recusandae,
                    illo error maxime. Neque velit quaerat sed modi illo earum quos! Debitis consequuntur, vel assumenda magni quod, sapiente sunt
                    eveniet veniam amet quidem veritatis, officiis sed commodi.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, expedita modi. Quis aliquam sunt inventore voluptatem nisi, eius
                    vel doloribus?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id possimus iste corrupti vero totam in quibusdam consequuntur labore.
                    Vero eum nesciunt itaque commodi maiores iste neque eos dolor ipsam, officia odio perspiciatis in voluptate delectus harum sunt
                    eius ipsa vitae vel? Mollitia delectus, expedita deserunt sit, unde culpa doloribus voluptatem voluptate laborum itaque fugit
                    veritatis, vel aspernatur suscipit. Blanditiis ipsa sint dolore! Dignissimos voluptate animi pariatur sed culpa quia cupiditate
                    quisquam atque explicabo delectus, officiis id totam, minima suscipit ea doloribus et rerum sapiente possimus repellat? Dolorem
                    quos minima delectus iste deserunt eligendi, adipisci laborum vel quasi, maiores, dolorum ut molestiae minus corrupti rerum autem
                    doloribus quia repellendus vitae non? Fugit minima, ea repellendus facere officiis tenetur harum velit voluptatem culpa obcaecati,
                    totam ullam dignissimos incidunt officia sit porro magni iste repellat aliquid laudantium cum in fuga distinctio doloremque!
                    Blanditiis alias voluptate fuga quam ducimus minus facere beatae, praesentium qui. Veniam enim harum quas ea, quasi ipsam quam
                    error. Temporibus repellendus similique doloribus magni culpa dolores unde repellat laboriosam accusamus at id, a explicabo
                    expedita reiciendis. Rerum nesciunt, quia saepe, exercitationem fuga aut, accusamus voluptatibus provident corrupti non soluta.
                    Dolorum exercitationem quas, dolore beatae nesciunt facilis nam quos libero? Itaque?
                </p>
            </div>
        </section>
    );
};

export default PostDetail;
