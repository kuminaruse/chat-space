$('.js-form').on('submit', function(){
    console.log('hoge');
  });

$('.js-form').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
});

def create
  @message = @group.messages.new(message_params)
  if @message.save
    respond_to do |format|
      format.html { redirect_to group_messages_path(@group), notice: 'メッセージが送信されました' }
      format.json
    end
  else
    @messages = @group.messages.includes(:user)
  end
end