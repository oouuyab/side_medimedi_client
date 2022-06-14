<script></script>

<article style={`left: ${window.innerWidth > 414 ? 414 : 0}`}>
  <div>
    <h1>분석중...</h1>
    <h2>병용금기 사항이 있는지 알아보고 있어요</h2>
    <div class="img-wrapper">
      <img src="/assets/gif/pill.gif" alt="loading" />
    </div>
  </div>
</article>

<style lang="scss">
  article {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    max-width: 414px;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    div {
      width: 100%;
      margin-top: 32px;
      h1 {
        color: #2c73d2;
        margin-left: 26px;
        font-size: 26px;
        margin-bottom: 8px;
      }
      h2 {
        color: rgba(64, 64, 64, 1);
        font-size: 18px;
        margin-left: 26px;
        margin-bottom: 120px;
      }
      div.img-wrapper {
        position: asolute;
        bottom: 100px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        img {
          border-radius: 200px;
          width: 80%;
        }
      }
    }
  }
</style>
