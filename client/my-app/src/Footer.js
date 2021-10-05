import Api from "./Api"

function Footer() {
    return (
        <div>
            {Api.get_layouts("footer")}
        </div>
    );
}

export default Footer;
