import { Meta, StoryObj } from "@storybook/react";

import { Article } from "./article";

const meta: Meta<typeof Article> = {
  title: "article",
  component: Article,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Article>;

const __html = `<h2>Headline 2</h2>
<p>親譲りの無鉄砲で小供の時から損ばかりしている。<br>
小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。<br>
なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。<br>
新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。<br>
弱虫やーい。と囃したからである。<br>
小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）</p>
<h3>Headline 3-1</h3>
<p>Facilisis imperdiet porta facilisis conubia posuere non potenti tempor tortor, quis aenean egestas id lacinia dui conubia eros facilisis hac orci sem conubia consequat ad.</p>
<p>Eleifend congue parturient Quam condimentum duis hymenaeos vehicula platea. Ut, imperdiet ullamcorper tempor condimentum, iaculis. Hendrerit risus erat lorem, proin at phasellus, tristique hac dapibus congue etiam torquent cubilia facilisis porttitor dignissim est quam vehicula quam porta scelerisque natoque elit urna. Erat aenean integer. Eros interdum leo.</p>
<p>Iaculis nunc magnis lectus. Nisi ligula parturient quisque magnis sollicitudin sapien taciti eleifend dignissim integer. Hendrerit tincidunt lobortis diam varius ullamcorper facilisis. Interdum tempus magnis dictumst phasellus ultricies.</p>
<h3>Headline 3-2</h3>
<p>Facilisis imperdiet porta facilisis conubia posuere non potenti tempor tortor, quis aenean egestas id lacinia dui conubia eros facilisis hac orci sem conubia consequat ad.</p>
<p>Eleifend congue parturient Quam condimentum duis hymenaeos vehicula platea. Ut, imperdiet ullamcorper tempor condimentum, iaculis. Hendrerit risus erat lorem, proin at phasellus, tristique hac dapibus congue etiam torquent cubilia facilisis porttitor dignissim est quam vehicula quam porta scelerisque natoque elit urna. Erat aenean integer. Eros interdum leo.</p>
<p>Iaculis nunc magnis lectus. Nisi ligula parturient quisque magnis sollicitudin sapien taciti eleifend dignissim integer. Hendrerit tincidunt lobortis diam varius ullamcorper facilisis. Interdum tempus magnis dictumst phasellus ultricies.</p>
<h4>Headline 4</h4>
<ul>
<li>list1</li>
<li>list2</li>
<li>list3
<ul>
<li>list3-1</li>
<li>list3-2</li>
<li>list3-3</li>
</ul>
</li>
<li>list4</li>
</ul>
<p><a href="http://www.google.com">google</a> is a search engine.</p>
<h5>Headline 5</h5>
<p></p><p class="text-center text-gray">The time to create a Markov Chain model from each of the dummy texts of 100, 500, and 1000 words.</p><p></p>
<p><img src="https://raw.githubusercontent.com/ichi-h/markov_rs/main/imgs/create_model.jpg" alt="image"></p>
<h2>YouTube</h2>
<p></p><iframe width="100%" height="100%" src="https://www.youtube.com/embed/CvglW3KNSsQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" data-ruffle-polyfilled=""></iframe><p></p>
<h2>Quote</h2>
<blockquote>
<p>This is a quote.<br>
This is a quote.<br>
This is a quote.</p>
</blockquote>
<h2>Code</h2>
<pre><code class="language-python hljs"><span class="hljs-keyword">def</span> <span class="hljs-title function_">main</span>():
    <span class="hljs-built_in">print</span>(<span class="hljs-string">"Hello World!"</span>)
main()
</code></pre>
<h2>Expand</h2>
<p><span class="text-bold">強調</span></p>
<p><span class="text-bold text-blue">強調</span></p>
<p><span class="text-bold text-blue text-3">強調</span></p>
<p><span class="text-bold text-red">強調</span></p>
<p><span class="text-bold text-red text-5">強調</span></p>
<p><span class="text-bold text-red text-8">強調</span></p>
<p><span class="text-bold text-red text-12">強調</span></p>`;

export const Default: Story = {
  render: () => <Article dangerouslySetInnerHTML={{ __html }} />,
};
